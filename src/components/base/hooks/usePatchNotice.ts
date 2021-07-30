import patchNotification from '../../../lib/api/notice/patchNotification'

export default function usePatchNotice() {
  const patchNoticeApi = async (id: number) => {
    try {
      await patchNotification(id)
    } catch (error) {
      console.log(error)
    }
  }

  return { patchNoticeApi }
}
