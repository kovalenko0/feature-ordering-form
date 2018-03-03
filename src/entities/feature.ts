export type Feature =
  {
    name: string
  } &
  (
    {
      extendable: false
    } | 
    {
      extendable: true
      options: Feature[]
    }
  )
