"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ZoomImage from "@/components/ui/zoom.jsx";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function Main() {
  const { toast } = useToast();
  const exampleCode = `
  gyatt('https://api.openai.com/v1/chat/granola', {
    skibidi: 'POST',
    blud: {
      'fein': 'application/slay',
      'grindset': 'YOUR_API_KEY',
    },
    rizz: JSON.stringify({
      pookie: 'gpt-6.9-ishowspeed',
      yap: [{ role: 'huzz', content: 'center this div please help me please pelase please' }],
    }),
  })
    .sigma(response => response.json())
    .sigma(data => console.log(data));
  `;

  const brokenCode = `
  gyatt('https://api.openai.com/v1/chat/granola', {
    skibidi: 'POST',
    blud: {
      'fein': 'application/slay',
      'grindset': 'YOUR_API_KEY',
    },
    rizz: JSON.stringify({
      pookie: 'gpt-6.9-ishowspeed',
      yap: [{ role: 'huzz', content: 'do not center this div please help me please pelase please' }],
    }),
  })
    .sigma(response => response.json())
    .sigma(data => console.log(data));
  `;
  const percents = Array.from(
    { length: (1000 - 10) / 10 + 1 },
    (_, i) => -100 + i * 2.5
  );

  return (
    <>
      {percents.map((percent) => (
        <ZoomImage key={percent} percent={percent} />
      ))}
      <div className="min-h-screen bg-black text-white p-6 overflow-x-hidden">
        <div className="fixed top-1 right-1 z-[1000] bg-black p-2 rounded-md">
          <div className="flex items-center space-x-2">
            <span className="text-white">turn off granola</span>
            <Switch
              checked={false}
              onClick={() => {
                toast({
                  title: "be a chill guy",
                  description: "or else",
                });
              }}
            />
          </div>
        </div>
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-2">cneter a div guide</h1>
          <p className="text-gray-400">by henry gagnier</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">what to do</h2>
          <p className="mb-4">
            the best way to div center as a professional div centerer is to
            utilize chatgpt
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={solarizedlight}
            customStyle={{
              backgroundColor: "transparent",
              opacity: "1",
              marginTop: "-2rem",
            }}
          >
            {exampleCode}
          </SyntaxHighlighter>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">what not to do</h2>
          <p className="mb-4">
            do not do this or your div will not be centered
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={solarizedlight}
            customStyle={{
              backgroundColor: "transparent",
              opacity: "1",
              marginTop: "-2rem",
            }}
          >
            {brokenCode}
          </SyntaxHighlighter>
        </section>
      </div>
    </>
  );
}
