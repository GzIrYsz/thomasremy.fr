'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Construction, Clock, Mail, RotateCw } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 dark:from-slate-900 dark:to-slate-800">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="space-y-6 p-8 text-center">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <Construction className="h-16 w-16 text-orange-500" />
              <div className="absolute -top-1 -right-1">
                <div className="h-4 w-4 animate-pulse rounded-full bg-orange-500" />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Under Maintenance
            </h1>
            <p className="text-muted-foreground">
              I&#39;m currently working on some exciting updates to make the
              experience even better.
            </p>
          </div>

          {/* Status Info */}
          <div className="space-y-3 rounded-lg bg-muted/50 p-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Expected completion: Soon</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Thank you for your patience while I enhance the portfolio.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => window.location.reload()}
            >
              <RotateCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-full text-muted-foreground hover:text-foreground"
              onClick={() =>
                (window.location.href = 'mailto:contact@thomasremy.fr')
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Footer */}
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              Portfolio maintenance in progress
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
