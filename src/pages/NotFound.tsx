import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

const NotFound = () => {
  const [,setLocation] = useLocation();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-ping" />
              <AlertCircle className="relative h-16 w-16 text-terracotta" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

         
             <div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              style={{
                animation: "slideUp 0.7s cubic-bezier(0.23,1,0.32,1) 0.45s both",
              }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  setLocation("/");
                }
              }
                className="brutal-btn flex bg-terracotta dark:bg-terracotta text-cream px-6 py-3"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </a>
            </div>
            
        </CardContent>
      </Card>
    </div>
  );
}

export default NotFound;