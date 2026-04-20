import { Download, Eye, EyeOff, RotateCcw, Save, Upload } from "lucide-react";
import { useMemo, useState } from "react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAdminData, type EditableEventItem, type EditableMenuItem } from "@/lib/admin-store";

const ADMIN_PASSWORD = "seventy70";
const authKey = "seventy-admin-auth";

type AdminTab = "menu" | "events" | "settings" | "data";

const tabs: { id: AdminTab; label: string }[] = [
  { id: "menu", label: "Cardápio" },
  { id: "events", label: "Agenda" },
  { id: "settings", label: "Informações" },
  { id: "data", label: "Backup" }
];

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === ADMIN_PASSWORD) {
      window.localStorage.setItem(authKey, "true");
      onLogin();
      return;
    }

    setError(true);
  }

  return (
    <section className="container flex min-h-[80vh] items-center justify-center pt-28">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <Badge variant="outline" className="mb-4 text-primary">
          Admin
        </Badge>
        <h1 className="font-display text-3xl font-black text-white">Painel Seventy</h1>
        <p className="mt-3 text-sm leading-6 text-white/58">Senha inicial: seventy70</p>
        <div className="mt-6 grid gap-2">
          <Label htmlFor="admin-password">Senha</Label>
          <Input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        {error ? <p className="mt-3 text-sm text-red-300">Senha incorreta.</p> : null}
        <Button className="mt-6 w-full" type="submit">
          Entrar
        </Button>
      </form>
    </section>
  );
}

function MenuEditor() {
  const { menuItems, updateMenuItem } = useAdminData();
  const grouped = useMemo(
    () =>
      menuItems.reduce<Record<string, EditableMenuItem[]>>((acc, item) => {
        acc[item.category] = [...(acc[item.category] ?? []), item];
        return acc;
      }, {}),
    [menuItems]
  );

  return (
    <div className="grid gap-6">
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category}>
          <h2 className="mb-3 font-display text-2xl font-black text-white">{category}</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((item) => (
              <Card key={item.id} className="bg-white/[0.045] p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Badge variant={item.active ? "default" : "outline"}>{item.active ? "Ativo" : "Oculto"}</Badge>
                  <Button size="sm" variant="outline" onClick={() => updateMenuItem(item.id, { active: !item.active })}>
                    {item.active ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                    {item.active ? "Ocultar" : "Mostrar"}
                  </Button>
                </div>
                <div className="grid gap-3">
                  <div className="grid gap-2">
                    <Label>Nome</Label>
                    <Input value={item.name} onChange={(event) => updateMenuItem(item.id, { name: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Descrição</Label>
                    <Textarea value={item.description} onChange={(event) => updateMenuItem(item.id, { description: event.target.value })} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label>Preço</Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={item.price}
                        onChange={(event) => updateMenuItem(item.id, { price: Number(event.target.value) })}
                      />
                    </div>
                    <label className="flex items-center gap-3 pt-7 text-sm font-semibold text-white">
                      <input
                        type="checkbox"
                        checked={item.featured}
                        onChange={(event) => updateMenuItem(item.id, { featured: event.target.checked })}
                      />
                      Destaque
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <Label>Imagem</Label>
                    <Input value={item.image} onChange={(event) => updateMenuItem(item.id, { image: event.target.value })} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function EventsEditor() {
  const { events, updateEvent } = useAdminData();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {events.map((event) => (
        <Card key={event.id} className="bg-white/[0.045] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <Badge variant={event.active ? "default" : "outline"}>{event.active ? "Ativo" : "Oculto"}</Badge>
            <Button size="sm" variant="outline" onClick={() => updateEvent(event.id, { active: !event.active })}>
              {event.active ? "Ocultar" : "Mostrar"}
            </Button>
          </div>
          <div className="grid gap-3">
            {(["day", "date", "title", "type", "time"] as const).map((field) => (
              <div key={field} className="grid gap-2">
                <Label>{field}</Label>
                <Input value={event[field]} onChange={(input) => updateEvent(event.id, { [field]: input.target.value })} />
              </div>
            ))}
            <div className="grid gap-2">
              <Label>Descrição</Label>
              <Textarea value={event.description} onChange={(input) => updateEvent(event.id, { description: input.target.value })} />
            </div>
            <div className="grid gap-2">
              <Label>Imagem</Label>
              <Input value={event.image} onChange={(input) => updateEvent(event.id, { image: input.target.value })} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function SettingsEditor() {
  const { settings, updateSettings } = useAdminData();
  const fields = ["phone", "whatsapp", "instagram", "email", "address", "hours", "mapLabel"] as const;

  return (
    <Card className="bg-white/[0.045] p-5">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field} className="grid gap-2">
            <Label>{field}</Label>
            <Input value={settings[field]} onChange={(event) => updateSettings({ [field]: event.target.value })} />
          </div>
        ))}
      </div>
    </Card>
  );
}

function DataTools() {
  const { exportAdminData, importAdminData, resetAdminData } = useAdminData();
  const [payload, setPayload] = useState("");
  const [status, setStatus] = useState("");

  return (
    <Card className="bg-white/[0.045] p-5">
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => setPayload(exportAdminData())}>
          <Download className="mr-2 h-4 w-4" /> Exportar JSON
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setStatus(importAdminData(payload) ? "Importado." : "JSON inválido.");
          }}
        >
          <Upload className="mr-2 h-4 w-4" /> Importar JSON
        </Button>
        <Button variant="outline" onClick={resetAdminData}>
          <RotateCcw className="mr-2 h-4 w-4" /> Resetar dados
        </Button>
      </div>
      {status ? <p className="mt-4 text-sm text-primary">{status}</p> : null}
      <Textarea className="mt-5 min-h-[360px] font-mono text-xs" value={payload} onChange={(event) => setPayload(event.target.value)} />
    </Card>
  );
}

export function AdminPage() {
  const [authenticated, setAuthenticated] = useState(() => window.localStorage.getItem(authKey) === "true");
  const [tab, setTab] = useState<AdminTab>("menu");

  if (!authenticated) return <AdminLogin onLogin={() => setAuthenticated(true)} />;

  return (
    <section className="container pb-20 pt-32 md:pt-40">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Admin" title="Gerencie o site sem mexer no código." description="Altere cardápio, agenda e informações da casa." />
        <Button
          variant="outline"
          onClick={() => {
            window.localStorage.removeItem(authKey);
            setAuthenticated(false);
          }}
        >
          Sair
        </Button>
      </div>
      <div className="my-8 flex gap-2 overflow-x-auto pb-2">
        {tabs.map((item) => (
          <Button key={item.id} variant={tab === item.id ? "default" : "outline"} onClick={() => setTab(item.id)}>
            {item.label}
          </Button>
        ))}
      </div>
      {tab === "menu" ? <MenuEditor /> : null}
      {tab === "events" ? <EventsEditor /> : null}
      {tab === "settings" ? <SettingsEditor /> : null}
      {tab === "data" ? <DataTools /> : null}
      <p className="mt-8 flex items-center gap-2 text-sm text-white/48">
        <Save className="h-4 w-4 text-primary" /> Alterações salvas automaticamente neste navegador.
      </p>
    </section>
  );
}
