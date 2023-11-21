import { Footer } from "flowbite-react";
import React from "react";
import LogoD from '../Pages/IMG/logoD.png'
function FlowFooter() {
  return (
    <div className=" px-5 lg:px-[10%]">
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
           {
             <Footer.Brand
             href="@"
             src={LogoD}
             alt="404"
           />
           }
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="https://www.facebook.com/abdullahalsazib22"
            by="Abdullah Al Sazib"
            year={2023}
          />
        </div>
      </Footer>
    </div>
  );
}

export default FlowFooter;
