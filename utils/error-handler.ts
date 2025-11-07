// Error handling utilities
export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleError = (error: unknown, context?: string) => {
  if (process.dev) {
    console.error(`[Error${context ? ` in ${context}` : ''}]:`, error)
  }
  
  // In production, you might want to send to error tracking service
  // e.g., Sentry, LogRocket, etc.
  
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode
    }
  }
  
  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR'
    }
  }
  
  return {
    message: 'Произошла неизвестная ошибка',
    code: 'UNKNOWN_ERROR'
  }
}

