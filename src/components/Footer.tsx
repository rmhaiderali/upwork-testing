import { component$, QRL } from "@builder.io/qwik";

export default component$(
  ({
    currentPage,
    gotoPreviousPage,
    gotoNextPage,
  }: {
    currentPage: number;
    gotoPreviousPage: QRL<() => void>;
    gotoNextPage: QRL<() => void>;
  }) => {
    const canGotoPrevious = currentPage > 1;
    const canGotoNext = currentPage < 3;

    return (
      <div class="flex border-t-2">
        <textarea
          class="mx-12 my-4 grow resize-none rounded-md bg-[#F5F5F5] px-4 py-[0.75rem] outline-none"
          rows={2}
          value={
            "I am going to read you a list of substances. Could you tell me which ones you have used, how long, how recently, and how you used them?"
          }
        />
        <div class="mr-12 flex items-center">
          <button
            class="rounded px-[1.7rem] py-[0.8rem]"
            style={"background:" + (canGotoPrevious ? "#1F27B7" : "#EFF0FA")}
            onClick$={() => {
              if (canGotoPrevious) gotoPreviousPage();
            }}
          >
            <svg
              height="15"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 22.8889L2 12.5L13 2.1111"
                stroke={canGotoPrevious ? "white" : "#8386BB"}
                stroke-width="3.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="ml-2 rounded px-[1.7rem] py-[0.8rem]"
            style={"background:" + (canGotoNext ? "#1F27B7" : "#EFF0FA")}
            onClick$={() => {
              if (canGotoNext) gotoNextPage();
            }}
          >
            <svg
              height="15"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.11154L13 12.5004L2 22.8893"
                stroke={canGotoNext ? "white" : "#8386BB"}
                stroke-width="3.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  },
);
