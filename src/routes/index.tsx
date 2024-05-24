import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Page1 from "~/components/Page1";
import Page2 from "~/components/Page2";
import Page3 from "~/components/Page3";

export default component$(() => {
  const state = useStore({
    currentPage: 1,
  });

  const gotoNextPage = $(() => {
    state.currentPage = state.currentPage + 1;
  });
  const gotoPreviousPage = $(() => {
    state.currentPage = state.currentPage - 1;
  });

  const CurrentPage: any = [null, Page1, Page2, Page3][state.currentPage];

  return (
    <div class="flex h-full flex-col">
      <Header currentPage={state.currentPage} />
      <CurrentPage currentPage={state.currentPage} />
      <Footer
        currentPage={state.currentPage}
        gotoNextPage={gotoNextPage}
        gotoPreviousPage={gotoPreviousPage}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
