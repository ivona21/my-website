import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | John Doe Portfolio</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to the portfolio homepage." />
      </Helmet>
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2 items-center">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <h1 className="text-2xl font-bold">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <Button asChild className="mt-6 w-full" data-testid="button-return-home">
              <a href="/">Return to Homepage</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
