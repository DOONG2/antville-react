export default function useGetTagHtml() {
  const getCacheTagHtml = (ticker: string) =>
    `<p><span class="mention" data-index="0" data-denotation-char="$" data-id="4055" data-value="${ticker}" data-render-string="${ticker}"><span contenteditable="false"><span class="ql-mention-denotation-char">$</span>${ticker}</span></span>${'&nbsp;'}</p>`

  const getMentionTagHtml = (user: string) =>
    `<p><span class="mention" data-index="0" data-denotation-char="@" data-id="6860" data-value="${user}" data-render-string="${user}"><span contenteditable="false"><span class="ql-mention-denotation-char">@</span>${user}</span></span>${'&nbsp;'}</p>`
  return { getCacheTagHtml, getMentionTagHtml }
}
