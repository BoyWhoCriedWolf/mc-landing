import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ClientCaseStudiesProps {
  title: string;
  description: string;
}

const studies: ClientCaseStudiesProps[] = [
  {
    title: "Xzavier $0 To $20,000 Per Month & Signed A $14,000 PIF Client",
    description:
      "Meet Our Client, Xzavier He Came Onboard With Us At MultiplyClients.io Quitting His 9-5 Realtor Job To Scale His Marketing Agency. He Signed His First Client For $1900 & Since Added Content + Software Development Onto His Offer To Sign A High-Ticket $14,000 PIF Deal. Scaling To $20,000 Per Month From $0.",
  },
  {
    title: "Ash White $0 To $12,000 First Week",
    description:
      "Meet Our Client, Ash White. Ash Scaled His Clothing Brand Hera From $0-$33 Million Dollars & Sold His Company For Multiple 7-Figures. He Since Came Onboard With Us At MultiplyClients.io To Start & Scale A Brand New Coaching Program From $0. We Built His Messaging & Ad Strategy, Resulting In Him Cash Collecting $12,000 In His First Week From Spending $150 On Ads.",
  },
  {
    title: "Mat Signed 2 Clients Week 1",
    description: "Meet Our Client Mat, Mat Came Onboard At MultiplyClients.io As A Complete Beginner In The Agency Space. After 7 Days Of Implementing Our Growth Team, Mat Secured His First Ever 2 Clients. We Met Up With Mat In London To Dial In The Gameplan To Take Him To $30K MRR."
  },
  {
    title: "Luca $0 To $6.3K Week",
    description: "Meet Our Client Luca, Luca Signed On At MultiplyClients.io As A Freelancer Video Editor Making $0. Since Partnering With Us 1-1 & Implementing Our Growth Systems He Has Pivoted Into A Growth Agency, Now Signing Consistent High-Ticket Clients. Collecting A $6.3K Week Through Organic Marketing."
  },
  {
    title: "Sam Signed 10 New Clients",
    description: "Meet Our Client Sam, Sam Became Our Growth Partner At MultiplyClients.io Struggling To Book Consistent Meetings. We Refined Sam's Offer Into A Full-Stack Acquisition & Content Offer. By Implementing Our Setter, Sam Was Able To Sign 10 New Clients For His Business."
  },
  {
    title: "Braden $0 To $10,000 Per Month Contracted",
    description: "Meet Our Client Braden, Braden Signed On At $0 With His DFY Offer. We Came Into His Company As Partners, Re-Built His Offer & Acquisition Infrastructure & He Was Able To Contract $10,000 In A Single Month"
  },
  {
    title: "Daniel Signed 7 New Clients",
    description: "Meet Our Client Daniel, Daniel Partnered With Us At $0 With His Offer Looking To Scale. After A Few Growth Consulting Sessions, Daniel Was Able To Implement Our Client Acquisition Systems To Add 7 Brand New Clients With His Agency."
  },
  {
    title: "Ryan $0-$5K 30 Days",
    description: "Meet Our Client Ryan, Ryan Signed On With Us At MultiplyClients.io With 0 Experience. We Built His Offer From Stratch & Implemented Our Appointment Setting Team Resulting In Him Collecting $5000 In His First 30 Days."
  },
];

export const ClientCaseStudies = () => {
  return (
    <section className="container py-24 sm:py-32 relative">
      <div className="shadow-left-side"></div>
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
        We’re Results Driven. Heres Some Client Case Studies
      </h2>
      <div className="grid lg:grid-cols-2 gap-20">
        {studies.map(({ title, description }: ClientCaseStudiesProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <div className="w-fit border border-primary/60 h-64 bg-muted/50 rounded-lg p-6 flex items-center">
                <iframe src="" className="w-56 lg:w-4/5 h-60" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
