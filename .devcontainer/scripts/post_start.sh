echo "start to copy local ~/.gitconfig"
git config --global --add safe.directory $1

git config pull.rebase false
git config --global commit.template .commit_template

# wsl使用時はroot以外書き込み権限がなくなるので、オーナーを現在のユーザに合わせる
ARCH=$(uname -m)
if [ "$ARCH" != "arm64" ] && [ "$ARCH" != "aarch64" ]; then
  echo "Start to change owner root for windows users."
  sudo chown -R $USER:$USER .
  echo "Changed owner."
fi