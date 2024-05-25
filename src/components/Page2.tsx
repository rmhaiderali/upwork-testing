import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="b-md:flex-wrap flex grow">
      <div class="flex grow">
        <div class="mb-6 ml-6 mt-8">
          <div class="flex items-start">
            <div class="rounded bg-[#1F27B7] p-2 text-white">A1.</div>
          </div>
        </div>
        <div class="m-6 mr-0 mt-8 grow">
          <div class="items-star flex flex-col">
            <div class="mt-2 w-full font-medium">(i) Alcohol</div>
            <div class="mt-4 border-t-2"></div>
            <div class="mt-8 flex flex-wrap">
              <div class="mb-6 mr-6 flex flex-col">
                <label class="ml-2 text-[#8386BB]">Date of last use:</label>
                <input
                  class="w-[10rem] rounded-md border-2 border-[#F5F5F5] px-4 py-[0.75rem] outline-none"
                  type="text"
                  value={"01-05-2024"}
                />
              </div>
              <div class="mb-6 mr-6 flex flex-col">
                <label class="ml-2 text-[#8386BB]">Avg. drinks</label>
                <input
                  class="w-[6rem] rounded-md border-2 border-[#F5F5F5] px-4 py-[0.75rem] outline-none"
                  type="text"
                  value={"5"}
                />
              </div>
              <div class="mb-6 mr-6 flex flex-col">
                <label class="ml-2 text-[#8386BB]">
                  In last 30 days, how often:
                </label>
                <input
                  class="w-[13rem] rounded-md border-2 border-[#F5F5F5] px-4 py-[0.75rem] outline-none"
                  type="text"
                  value={"> 5 times"}
                />
              </div>
              <div class="mb-6 mr-6 flex flex-col">
                <label class="ml-2 text-[#8386BB]">
                  Duration of continuous use
                </label>
                <div>
                  <input
                    class="w-[6rem] rounded-md border-2 border-[#F5F5F5] px-4 py-[0.75rem] outline-none"
                    type="text"
                    value={"5"}
                  />
                  <input
                    class="ml-6 w-[6rem] rounded-md border-2 border-[#F5F5F5] px-4 py-[0.75rem] outline-none"
                    type="text"
                    value={"6"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="a-md:min-w-[300px] b-md:min-w-full a-md:border-l-2 b-md:border-t-2 a-md:pt-6 b-md:pt-2 flex flex-col flex-wrap p-8">
        {["Yes", "Never used"].map((item) => (
          <label
            class="mt-6 flex items-center rounded-full bg-[#EFF0FA] p-4"
            key={item}
          >
            <input type="radio" name="usageStatus" class="mr-4" />
            {item}
          </label>
        ))}
      </aside>
    </div>
  );
});
