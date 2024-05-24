import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex grow">
      <div class="mt-8 mb-6 ml-6">
        <div class="flex items-start">
          <div class="rounded bg-[#1F27B7] p-2 text-white">A1.</div>
        </div>
      </div>
      <div class="m-6 mt-8 grow">
        <div class="flex items-start">
          <div class="mt-2">
            I am going to read you a list of substances. Could you tell me which
            ones you have used, how long, how recently, and how you used them?
          </div>
        </div>
      </div>
    </div>
  );
});
