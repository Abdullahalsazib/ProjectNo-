import React from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
function FlowFrom() {
  return (
    <div>
      {" "}
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput id="name" type="text" />
        </div>
        <div className="mb-2 block">
          <div className="mb-2 block">
            <Label htmlFor="messges" value="Messages" />
          </div>
          <Textarea id="messges" placeholder="Type Your Messages !" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FlowFrom;
