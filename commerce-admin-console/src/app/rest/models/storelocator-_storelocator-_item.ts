/* tslint:disable */
import { storelocator_storelocator_item_Attribute } from './storelocator-_storelocator-_item-_attribute';
import { storelocator_storelocator_item_Description } from './storelocator-_storelocator-_item-_description';
import { storelocator_storelocator_item_userDataField } from './storelocator-_storelocator-_item-_user-data-field';
export interface storelocator_storelocator_item {
  uniqueID?: string;
  distance?: string;
  storeName?: string;
  Attribute?: Array<storelocator_storelocator_item_Attribute>;
  longitude?: string;
  postalCode?: string;
  stateOrProvinceName?: string;
  Description?: Array<storelocator_storelocator_item_Description>;
  telephone1: string;
  latitude?: string;
  userDataField?: Array<storelocator_storelocator_item_userDataField>;
  country?: string;
  city?: string;
  addressLine?: Array<string>;
}
