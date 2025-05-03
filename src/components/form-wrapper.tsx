"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FormWrapperProps {
  title: string
  description?: string
  children: React.ReactNode
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
  isSubmitting?: boolean
  submitText?: string
  cancelText?: string
  footer?: React.ReactNode
}

export function FormWrapper({
  title,
  description,
  children,
  onSubmit,
  onCancel,
  isSubmitting = false,
  submitText = "Save",
  cancelText = "Cancel",
  footer,
}: FormWrapperProps) {
  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex items-center justify-between">
          {footer ? (
            footer
          ) : (
            <>
              <Button type="button" variant="outline" onClick={onCancel}>
                {cancelText}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : submitText}
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </form>
  )
}
