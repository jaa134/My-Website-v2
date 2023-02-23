if [[ -z $(git status -s) ]]
then
    # Working tree is clean...

    # Prep
    cd ./My-Website-BUILD
    git pull
    cd ..

    # Deploy desktop
    cd ./desktop
    npm run deploy
    cd ..

    # Deploy mobile
    cd ./mobile
    npm run deploy
    cd ..

    # Commit and push changes to submodule
    cd ./My-Website-BUILD
    git add .
    git commit -m "Deploy website v2"
    git push
    cd ..

    # Commit and push changes to repo
    git add .
    git commit -m "Deploy"
    git push
else
    # Working tree is dirty...

    echo "Your working tree is dirty, please commit changes before deploying!"
    exit
fi
