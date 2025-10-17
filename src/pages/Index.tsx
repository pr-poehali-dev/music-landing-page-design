import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const artists = [
  {
    name: "Alexei Volkov",
    genre: "Techno",
    image: "https://cdn.poehali.dev/projects/97c6912f-547e-491d-834e-ae1171171d5d/files/8a6c847b-c2b6-40bd-ae4f-f10d88d38ea2.jpg"
  },
  {
    name: "Nina Sokolova",
    genre: "Electronic",
    image: "https://cdn.poehali.dev/projects/97c6912f-547e-491d-834e-ae1171171d5d/files/9ac6dd6f-80ac-4678-a4b8-6ae8a9469634.jpg"
  },
  {
    name: "Dmitry Orlov",
    genre: "Hip-Hop",
    image: "https://cdn.poehali.dev/projects/97c6912f-547e-491d-834e-ae1171171d5d/files/cbef23de-0ac1-433f-9dd5-1fa0fc9347ec.jpg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display font-bold text-2xl tracking-tight">SOUND</h1>
          <div className="flex items-center gap-8">
            <a href="#artists" className="text-sm font-medium hover:text-primary transition-colors">Artists</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display font-bold text-6xl md:text-8xl mb-6 tracking-tight leading-none">
            Sound<br />Label
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Pushing boundaries in contemporary music since 2020
          </p>
        </div>
      </section>

      <section id="artists" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Users" size={32} className="text-primary" />
            <h3 className="font-display font-semibold text-3xl md:text-4xl">Artists</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <Card 
                key={artist.name} 
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display font-semibold text-xl mb-2">{artist.name}</h4>
                  <Badge variant="secondary" className="font-normal">
                    {artist.genre}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="font-display font-semibold text-3xl mb-6">Get in Touch</h3>
          <p className="text-muted-foreground mb-8">Interested in working with us?</p>
          <a 
            href="mailto:info@soundlabel.com" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Icon name="Mail" size={20} />
            Contact Us
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 Sound Label. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <Icon name="Music" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
