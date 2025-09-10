import LoginContainer from "@/components/login/login-container";

const LoingPage = () => {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-10 md:bg-[#F7F6F6] bg-white" />
      <div id="" className="flex flex-col box-border sm:pt-[72px] text-black lg:max-w-[960px] w-full h-full mx-auto">
        <main id="main" className="w-full h-full">
          <LoginContainer />
        </main>
      </div>
    </>
  )
};

export default LoingPage;
