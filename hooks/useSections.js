'use client'

import React from 'react'

export default function useSections () {
  const [sections, setSections] = React.useState([])
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll('section'))
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1))
      }))
    setSections(elements)
  }, [])
  return sections
}
