import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Send, 
  Paperclip, 
  Smile, 
  X, 
  Search,
  Check
} from "lucide-react";

interface Message {
  to: string;
  subject: string;
  message: string;
  recipients: string[];
  timestamp: string;
}

interface MessageComposerProps {
  onClose?: () => void;
  onSend?: (message: Message) => void;
}

const MessageComposer = ({ onClose, onSend }: MessageComposerProps) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);

  const recipients = [
    { id: "1", name: "Sarah Wilson", email: "sarah@example.com", avatar: "https://avatars.githubusercontent.com/u/345678" },
    { id: "2", name: "Mike Johnson", email: "mike@example.com", avatar: "https://avatars.githubusercontent.com/u/789012" },
    { id: "3", name: "Lisa Wang", email: "lisa@example.com", avatar: "https://avatars.githubusercontent.com/u/234567" },
    { id: "4", name: "David Kim", email: "david@example.com", avatar: "https://avatars.githubusercontent.com/u/890123" },
    { id: "5", name: "Emma Davis", email: "emma@example.com", avatar: "https://avatars.githubusercontent.com/u/456789" },
  ];

  const handleSend = () => {
    if (!to || !subject || !message) return;
    
    const newMessage = {
      to,
      subject,
      message,
      recipients: selectedRecipients,
      timestamp: new Date().toISOString(),
    };

    onSend?.(newMessage);
    setTo("");
    setSubject("");
    setMessage("");
    setSelectedRecipients([]);
  };

  const addRecipient = (recipientId: string) => {
    if (!selectedRecipients.includes(recipientId)) {
      setSelectedRecipients([...selectedRecipients, recipientId]);
    }
  };

  const removeRecipient = (recipientId: string) => {
    setSelectedRecipients(selectedRecipients.filter(id => id !== recipientId));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Compose Message</CardTitle>
            <CardDescription>Write and send a new message</CardDescription>
          </div>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Recipients */}
        <div className="space-y-2">
          <label className="text-sm font-medium">To</label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search recipients..."
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="flex-1"
              />
            </div>
            
            {/* Selected Recipients */}
            {selectedRecipients.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedRecipients.map((recipientId) => {
                  const recipient = recipients.find(r => r.id === recipientId);
                  return recipient ? (
                    <Badge key={recipientId} variant="secondary" className="flex items-center gap-1">
                      <Avatar className="h-4 w-4">
                        <AvatarImage src={recipient.avatar} />
                        <AvatarFallback className="text-xs">{recipient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {recipient.name}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => removeRecipient(recipientId)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ) : null;
                })}
              </div>
            )}
            
            {/* Recipient Suggestions */}
            {to && (
              <div className="border rounded-lg p-2 space-y-1">
                {recipients
                  .filter(r => r.name.toLowerCase().includes(to.toLowerCase()) || r.email.toLowerCase().includes(to.toLowerCase()))
                  .filter(r => !selectedRecipients.includes(r.id))
                  .map((recipient) => (
                    <div
                      key={recipient.id}
                      className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer"
                      onClick={() => addRecipient(recipient.id)}
                    >
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={recipient.avatar} />
                        <AvatarFallback className="text-xs">{recipient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{recipient.name}</p>
                        <p className="text-xs text-muted-foreground">{recipient.email}</p>
                      </div>
                      <Check className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <Input
            placeholder="Enter subject..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[200px]"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Paperclip className="h-4 w-4" />
              Attach
            </Button>
            <Button variant="outline" size="sm">
              <Smile className="h-4 w-4" />
              Emoji
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSend} disabled={!to || !subject || !message}>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageComposer; 