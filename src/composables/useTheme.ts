export default function useTheme() {
  const enabled = useState<boolean | undefined>('theme', () => undefined)

  onMounted(()=>{
    enabled.value = localStorage.getItem("theme") === "dark" ? true : false
  })


  const toggleTheme = () => {
    enabled.value = !enabled.value
    localStorage.setItem("theme", enabled.value ? "dark" : "light")
    setTheme()
  }

  function setTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    enabled,
    toggleTheme,
    setTheme,
  }
}
