import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';
import { topics } from '@/lib/constants';

interface ThreadFormProps {
  loading: boolean;
  onGenerate: () => void;
}

export function ThreadForm({ loading, onGenerate }: ThreadFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="topic">Choose Your Topic</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((topic) => (
              <SelectItem key={topic} value={topic.toLowerCase()}>
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="keywords">Target Keywords</Label>
        <Input
          id="keywords"
          placeholder="Enter keywords separated by commas"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tone">Thread Tone</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="casual">Casual</SelectItem>
            <SelectItem value="humorous">Humorous</SelectItem>
            <SelectItem value="educational">Educational</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={onGenerate}
        className="w-full"
        disabled={loading}
      >
        {loading ? (
          "Generating..."
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Thread
          </>
        )}
      </Button>
    </div>
  );
}