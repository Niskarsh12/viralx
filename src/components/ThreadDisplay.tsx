import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ThreadDisplayProps {
  tweets: string[];
}

export function ThreadDisplay({ tweets }: ThreadDisplayProps) {
  if (tweets.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Your Generated Thread</h2>
      {tweets.map((tweet, index) => (
        <div key={index} className="relative">
          <Textarea
            value={tweet}
            className="min-h-[100px] resize-none"
            onChange={() => {}}
          />
          <div className="absolute bottom-2 right-2 text-sm text-gray-400">
            {280 - tweet.length} characters left
          </div>
        </div>
      ))}
      <Button className="w-full">
        Copy Thread
      </Button>
    </div>
  );
}