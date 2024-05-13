export const About = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-44 gap-12 relative">
      {/* <div className="bg-muted/50 rounded-lg"> */}
      <div className="w-full border border-primary/60 h-96 bg-muted/50 rounded-lg"></div>
      {/* </div> */}
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl lg:text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Agency Owners&nbsp;
            </span>
            Stuck Below&nbsp;
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              $15K/Mo
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Scale Your Agency To $15-30K/Mo Guaranteed Releasing Growth Services &
          Partnering With Creators Leveraging Our ‘Multiply Acquisition
          Protocol’
        </p>
        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          (We’ll Work With You 1-1 To Guarantee You Scale To
          $15,000/Mo-$30,000/Mo)
        </p>
      </div>
      <div className="shadow-right-side">

      </div>
    </section>
  );
};
