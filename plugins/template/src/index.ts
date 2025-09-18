import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";

let unpatch;

export function onLoad() {
  const sendMessageMod = findByProps("sendMessage", "editMessage");
  unpatch = before("sendMessage", sendMessageMod, (args) => {
    args[1].content = "worked";
  });
}

export function onUnload() {
  unpatch?.();
}
