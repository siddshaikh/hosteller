import Hostel from "@/models/Hostel";
import { dataBaseConnection } from "@/utils/mongodb";

export async function getHostels() {
  try {
    await dataBaseConnection();
    const hostels = await Hostel.find({});
    return hostels;
  } catch (error) {
    console.log(error);
  }
}
