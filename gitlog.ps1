$content = (gc "last-built.log" | out-string)

git log --since=$content --pretty=medium | out-file git.log