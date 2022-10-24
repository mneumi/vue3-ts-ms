import type { IGetPageListAction } from "@/store/main/system"
import Requester from "../.."
import type { IDataType } from "../../types"

export function getPageListData(payload: IGetPageListAction) {
  return Requester.post<IDataType>({
    url: payload.pageUrl,
    data: payload.queryInfo,
  })
}
