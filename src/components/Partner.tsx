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
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Partner With Creator & Take Rev Share In Business
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {PartnerList.map(({ title }: PartnerProps) => (
            <Card key={title}>
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                {/* <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div> */}
                <div>
                  <CardTitle>{title}</CardTitle>
                  {/* <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription> */}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
