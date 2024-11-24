import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from '@/components/ThemeToggle';

function App() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [thread, setThread] = useState<string[]>([]);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter your request for the thread.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Simulated AI response - Replace with actual AI API call
    setTimeout(() => {
      const mockThread = [
        "🔥 Breaking down the latest AI breakthrough that's taking Twitter by storm! Here's why Claude 3 is a game-changer...",
        "1️⃣ Unprecedented Performance: Claude 3 has shown human-level performance across 99% of tested scenarios. This isn't just an upgrade - it's a quantum leap in AI capabilities.",
        "2️⃣ Real-world Impact: From medical diagnostics to climate modeling, the applications are limitless. We're seeing 10x faster processing with 100x more accuracy.",
        "3️⃣ Accessibility: Unlike previous models, Claude 3 is designed for developers of all levels. You can integrate it with just 3 lines of code!",
        "🚀 The implications are massive for tech, healthcare, and business. We're witnessing history in the making.",
        "💡 Want to stay ahead of AI trends? Follow me for daily insights and practical applications of cutting-edge tech!",
      ];
      setThread(mockThread);
      setLoading(false);
      toast({
        title: "Success!",
        description: "Your viral thread is ready to be customized and posted.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
            <XLogo className="w-7 h-7" />
            Viral X
          </h1>
          <p className="text-muted-foreground mt-1">AI-Powered Trending Thread Generator</p>
        </div>

        <Card className="p-4 mb-6">
          <Textarea
            placeholder="Describe the kind of thread you want to create based on current trends... 
Example: 'Create a viral thread about the latest AI breakthrough and its impact on technology'"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] mb-4"
          />
          <Button 
            onClick={handleGenerate} 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              "Analyzing trends & generating..."
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Viral Thread
              </>
            )}
          </Button>
        </Card>

        {thread.length > 0 && (
          <Card className="p-4">
            <div className="space-y-4">
              {thread.map((tweet, index) => (
                <div key={index} className="relative bg-card rounded-lg p-4 border">
                  <p className="text-card-foreground mb-2">{tweet}</p>
                  <div className="text-xs text-muted-foreground">
                    {280 - tweet.length} characters left
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="secondary">
                <Send className="mr-2 h-4 w-4" />
                Copy Thread
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

// Custom X Logo component
function XLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  );
}

export default App;