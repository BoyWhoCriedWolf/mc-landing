import { Card, CardHeader, CardTitle } from "./ui/card";

interface PartnerProps {
  title: string;
}

const PartnerList: PartnerProps[] = [
  {
    title: "● 1-1 Partnership Channel With Luke & Harvey",
  },
  {
    title: "● Weekly Group Calls",
  },
  {
    title: "● Personalised Gameplan To $15-30K/Mo",
  },
  {
    title: "● Access To Live Recordings + Trainings",
  },
  {
    title: "● 6 1-1 Growth Coaching Calls",
  },
  {
    title: "● Built Appointment Setting System",
  },
  {
    title: "● Free Setter, Creative Director, Closer, Dialler Hiring Access",
  },
  {
    title: "● Automated Data Tracking Sheets",
  },
  {
    title: "● 7 Figure Sales Training (Sales Coach)",
  },
];

export const Partner = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Partner With Creator & Take Rev Share In Business
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {PartnerList.map(({ title }: PartnerProps) => (
            <Card key={title} className="bg-muted/50">
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                <div>
                  <CardTitle>{title}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
