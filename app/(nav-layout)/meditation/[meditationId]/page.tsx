import MeditationContainer from "@/components/meditation/meditation-container";

const MeditationPage = async ({
  params,
}: {
  params: Promise<{ meditationId: string }>;
}) => {
  const { meditationId } = await params;
  console.log(meditationId);
  return (
    <div
      id=""
      className="flex flex-col box-border bg-white sm:pt-[72px] text-black lg:max-w-[1240px] w-full mx-auto "
    >
      <main
        id="main"
        className="w-full flex justify-between mt-[64px] sm:mt-[0px] gap-10"
      >
        <MeditationContainer />
      </main>
    </div>
  );
};

export default MeditationPage;
