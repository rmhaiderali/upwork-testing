import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex h-full grow">
      <div class="flex grow">
        <div class="mb-6 ml-6 mt-8">
          <div class="flex items-start">
            <div class="rounded bg-[#1F27B7] p-2 text-white">A1.</div>
          </div>
        </div>
        <div class="m-6 mr-0 mt-8 grow">
          <div class="items-star flex flex-col">
            <div class="mt-2 w-full font-medium">(i) Alcohol</div>
            <div class="mt-4 text-[#8386BB]">a. Frequency in last 30 days</div>
            <textarea
              class="my-4 mr-8 grow resize-none rounded-md border-2 border-[#F5F5F5] px-4 py-[0.75rem] outline-none"
              rows={10}
              placeholder={"Add description"}
            />
          </div>
        </div>
      </div>
      <aside class="flex w-[300px] min-w-[300px] flex-col flex-wrap border-l-2 px-8 pt-6">
        {[
          "4-7 days/week",
          "1-3 days/week",
          "3 or less days/month",
          "Not used",
        ].map((item) => (
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
