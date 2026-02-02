import { sortUtil } from "./sortutil";
import { NumberGroup } from "./numbergroup";
import { CharacterGroup } from "./charactergroup";
import { LinkedListGroup } from "./linkedlist";

const numberGroup = new NumberGroup([30, 3, -15, 0]);
const sorter1 = new sortUtil(numberGroup);
sorter1.sort();
console.log(numberGroup.data);
console.log("----------------------------")

const characterGroup = new CharacterGroup("Xaeyb");
const sorter2 = new sortUtil(characterGroup);
sorter2.sort();
console.log(characterGroup.data)
console.log("----------------------------")

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4);

const sorter3 = new sortUtil(linkedListGroup)
sorter3.sort();
linkedListGroup.print();