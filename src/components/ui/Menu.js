import * as React from "react";
import Transition from "./Transition";
import FocusTrap from "./FocusTrap";
import NavItems from "./NavItems";
import SidebarMenu from "./SidebarMenu";

export default function Menu({ children, isStatic, isClosed, setClosed }) {
  return (
    <>
      <NavItems  isClosed={isClosed} setClosed={setClosed} />

      <div className="w-full h-24  bg-opacity-95 absolute top-0 left-0"></div>

      <div className="flex  ">
        <Transition
          show={ !isClosed}
          enter="transition-all duration-500"
          enterFrom="-ml-64"
          enterTo="ml-0"
          leave="transition-all duration-500"
          leaveTo="-ml-64"
        >
          <aside
            className={`z-20  w-64 min-h-screen flex flex-col  ${
              isStatic ? "" : "fixed"
            }`}
          >
            <FocusTrap isActive={!isStatic}>
              <SidebarMenu  isClosed={isClosed} setClosed={setClosed}/>
            </FocusTrap>
          </aside>
        </Transition>

        <Transition
          appear={true}
          show={!isStatic && !isClosed}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black opacity-0" />
        </Transition>

        <main className="flex-grow flex flex-col min-h-screen bg-[#111827]">{children}</main>
      </div>
    </>
  );
}
