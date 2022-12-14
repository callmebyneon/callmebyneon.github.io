---
date: '2023-01-05 15:13:15'
title: 'Git cheat sheet'
category: 'Basic'
tags: ['git', 'github', 'git-flow', 'cheat sheet']
summary: "Git cheat sheet for me"
emoji: 'π'
---

# π‘ more information

- [https://docs.github.com/ko/github-cli](https://docs.github.com/ko/github-cli)

# Git

: λ²μ  κ΄λ¦¬λ₯Ό μν΄ μ¬μ©

*ref :* [https://git-scm.com/docs/](https://git-scm.com/docs/)

# 0. start

## check version

```bash
# μλ μ»€λ©λλ‘ μ€μΉ μλ£ νμΈ(λ²μ  νμΈ) κ°λ₯
git --version
```

## user config

```bash
git config --global user.email "<user@email.com>"
git config --global user.name "<username>"
```

## $ git init

(λ‘μ»¬) μ μ₯μ μμ±

```bash
# git μ μ₯μ μμ
git init

# κΈ°λ³Έ λΈλμΉλͺμ΄ 'master'μΈ κ²½μ°λ μμ
# λΈλμΉ μ΄λ¦μ 'main'μΌλ‘ λ³κ²½
git branch -M main
```

# 1. create version (record)

- **staging area**: commit νκΈ° μ μ commitν  νμΌλ€μ κ³¨λΌλλ κ³³
  - ex. staging modified file to staging area for commit
- **repository**: gitμ΄ νμΌ κΈ°λ‘μ μ μ₯ν΄λλ **μ μ₯μ**

## $ git add

```bash
# git add <file_name>
git add new.js

# λͺ¨λ  νμΌ μ€νμ΄μ§
git add . # νμ¬ μ μ₯μ λ΄ λͺ¨λ  (μμ λ) νμΌ
git add --all # λͺ¨λ  μμ λ νμΌ
```

## $ git commit

```bash
git commit -m ":commit message"
```

## $ git log

```bash
git log
git log --all --oneline --graph
# vim μλν°λ‘ νμΌμ μ΄μ΄ νμΈ
# ν€λ³΄λ `j/k` ν€λ₯Ό μ¬μ©νμ¬ μ€ν¬λ‘€ λ€μ΄/μ
# `q` ν€λ₯Ό μλ ₯νμ¬ μλν° μ’λ£
```

## $ git diff

κ°μ₯ μ΅κ·Ό μ»€λ°κ³Όμ μ½λ μ°¨μ΄ νμΈ

```bash
git diff
# vim μλν°λ‘ νμΌμ μ΄μ΄ νμΈ
```

```bash
# git difftool <commit_id?> <commit_id?>
git difftool
# vim μλν°λ‘ νμΌμ μ΄μ΄ νμΈ
# `:i`λ₯Ό μλ ₯νμ¬ νμΌ μμ 
# `:q` νΉμ `:qa`μ μλ ₯νμ¬ μλν° μ’λ£ 
```

- νΉμ  μ»€λ°κ³Όμ μ½λ μ°¨μ΄ νμΈ: `git difftool <commit_id>`.
- λ κ°μ μ»€λ°μ νΉμ νμ¬ μ½λ μ°¨μ΄ νμΈ: `git difftool <commit_id> <another_commit_id>`.
- VSCodeμ GUI extensionμ μ¬μ©ν  μλ μμ *ex. βGit Graphβ in VSCode extension*

## $ git stash

- μ»€λ° μ μ¬μ©νμ§ μλ μ½λλ₯Ό μ»€λ°μ ν¬ν¨νμ§ μλλ‘ μ κΉ λ³΄κ΄νκΈ°: stash μ¬μ© νΉμ new temporary branch μμ±
- μ΅κ·Ό μ»€λ°κ³Όμ μ°¨μ΄μ μ μ λΆ λ³΄κ΄

```bash
git stash
# νΉμ
git stash save 'memo'
# > Saved working directory and index state WIP on main: <commit_id> <commit_message>
```

```bash
# μΌλΆ μ½λλ§ stash
git stash -p
```

```bash
# stash λ¦¬μ€νΈ λ³΄κΈ°
git stash list

# κ°μ₯ μ΅κ·Ό stash λ€μ λΆλ¬μ€κΈ°
git stash pop

# stash μ­μ 
git stash drop {number} # specify one
git stash clear # all

```

## commit revert

### $ git restore

μ½λλ₯Ό μ΅κ·Ό νΉμ νΉμ  μ»€λ°μΌλ‘ λλλ¦¬κΈ° μν΄ μ¬μ©νκ±°λ νΉμ  νμΌμ stagingμ μ·¨μ

```bash
# git restore <νμΌλͺ>
# git restore --source <μ»€λ°_μμ΄λ> <νμΌλͺ>
```

```bash
# git resotre --staged <νμΌλͺ>
```

### $ git revert β 

μ»€λ° λλλ¦¬κΈ°

```bash
# git revert <μ»€λ°_μμ΄λ> <μ»€λ°_μμ΄λ?>
# μ μ²λΌ μ¬λ¬ μ»€λ° μμ΄λλ₯Ό μ§μ ν  μ μμ

# μ΅κ·Ό μ»€λ° λλλ¦¬κΈ°
git revert HEAD
```

<figure>
  <img src="./git-cheat-sheet-1.png" alt="'git revert commit2_id' μ»€λ©λ μ€ν μ commit2κ° μ­μ λ μλ‘μ΄ commit4 μ»€λ° μμ±" />
  <figcaption>'git revert commit2_id' μ»€λ©λ μ€ν μ commit2κ° μ­μ λ μλ‘μ΄ commit4 μ»€λ° μμ±</figcaption>
</figure>

### $ git reset β 

νΉμ  μ»€λ°μ΄ μμ±λ μμ μΌλ‘ λλμκ°κΈ°

```bash
# git reset --hard <μ»€λ°_μμ΄λ>

# λ¦¬μ ν λ³λμ¬ν­ staging
# git reset --soft <μ»€λ°_μμ΄λ>

# git reset μ»€λ©λμ κΈ°λ³Έ μ΅μ
# λ¦¬μ ν λ³λμ¬ν­ unstage
# git reset --mixed <μ»€λ°_μμ΄λ>
```

<figure>
  <img src="./git-cheat-sheet-2.png" alt="'git reset --hard commit2' μ»€λ©λ μ€ν μ commit2 μμΉλ‘ λ¦¬μλμ΄ μ΄νμ λ΄μ© μ­μ " />
  <figcaption>'git reset --hard commit2' μ»€λ©λ μ€ν μ commit2 μμΉλ‘ λ¦¬μλμ΄ μ΄νμ λ΄μ© μ­μ </figcaption>
</figure>

### $ git clean

λͺ¨λ  λ³κ²½ λ΄μ© μ·¨μ(μΆμ λμ§ μμ λͺ¨λ  νμΌ μ κ±°)

# 2. branch

## create and switch branch

```bash
# git branch/switch <λΈλμΉ_μ΄λ¦>
git branch new_branch
git switch new_branch

# νμ¬ λΈλμΉ μν νμΈ
git status
```

## merge branch

```bash
# λ³ν©νκΈ° μν λ² μ΄μ€ λΈλμΉλ‘ μ΄λ
git switch main

# λ³ν©νκ³ μ νλ λΈλμΉ λ³ν©
git merge new_branch
```

- κ°μ νμΌ, κ°μ λΌμΈμ μμ μ¬ν­μ΄ κ²ΉμΉλ€λ©΄ μΆ©λμ΄ λ°μν  μ μμ
- λ³ν© μΆ©λ μ, μΆ©λμ΄ μΌμ΄λ νμΌμ μ΄μ΄μ μμ  ν μ¬μ»€λ°

### 3-way

λ³ν©νλ €κ³  νλ λ λΈλμΉμ λͺ¨λ 1κ° μ΄μμ μ»€λ°μ΄ μλ κ²½μ° λ λΈλμΉκ° λ³ν©λ μλ‘μ΄ μ»€λ° μμ±

*ref.*

![git-cheat-sheet-3.png](./git-cheat-sheet-3.png)

### fast-forward

λ² μ΄μ€ λΈλμΉκ° λ³ν©νκ³ μ νλ λΈλμΉ μ΄νμ μ μ»€λ°μ΄ μλ κ²½μ°, μλ‘μ΄ μ»€λ°μ λ§λ€μ§ μκ³  λ³ν©νκ³ μ νλ λΈλμΉμ μ»€λ°μ λ² μ΄μ€ λΈλμΉλ‘ κ·Έλλ‘ κ°μ Έμ΄

*ref.*

![git-cheat-sheet-4.png](./git-cheat-sheet-4.png)

```bash
# fast-forwardλ₯Ό μνν΄λ λλ μν©μμ κ°μ λ‘ 3-way λ°©λ²μΌλ‘ λ³ν©
git merge --no-ff new_branch
```

### rebase

λ² μ΄μ€ λΈλμΉκ° λ³ν©νκ³ μ νλ λΈλμΉ μ΄νμ μ μ»€λ°μ΄ μλ κ²½μ°, μλ‘μ΄ λΈλμΉμ μμμ μ λ² μ΄μ€ λΈλμΉμ λμΌλ‘ μ΄λμμΌ fast-forward μ€ν

```bash
# λ³ν©νκ³ μνλ λΈλμΉλ‘ μ΄λ
git switch new_branch
# main λΈλμΉμμ μμμ  μ΄λ
git rebase main

# λΈλμΉ λ³ν©
git switch main
git merge new_branch
```

![git-cheat-sheet-5.png](./git-cheat-sheet-5.png)

### squash

```bash
git merge --squash new_new_branch
```

![git-cheat-sheet-6.png](./git-cheat-sheet-6.png)

- commit4μ λ‘κ·Έμ commit2-1, commit2-2κ° λ¨μ§ μμ

## delete branch

λ³ν©μ΄ μλ£λ κ²½μ° λμ²΄λ‘ λΈλμΉλ₯Ό μ­μ 

```bash
# μ±κ³΅μ μΌλ‘ μλ£λ κ²½μ°
git branch -d new_branch

# λ³ν©λμ§ μμ λΈλμΉλ₯Ό μ­μ νλ κ²½μ°
git branch -D new_new_branch
```

# 3. upload

- μκ²©μ μ₯μ(online repository)μ μ μ₯ β νμ μ κ°μμ λ‘μ»¬ μ μ₯μλ‘ λ³΅μ ν ν κ°λ° μ§ννκ² λ¨

## $ git push

```bash
# git push -u <μκ²©_μ μ₯μ_μ£Όμ> <μ¬λ¦΄_λ‘μ»¬_λΈλμΉλͺ>
git push -u https://github.com/<someone>/<some_repository>.git main
```

## $ git remote add &lt;variable&gt;

μκ²© μ μ₯μ μ€μ 

```bash
# git remote add <λ³μλͺ> <κ°(url)>
git remote add origin https://github.com/<someone>/<some_repository_name>.git

git push -u origin main
# => 'git push -u https://github.com/<someone>/<some_repository>.git main'μ λμΌ
# => `-u`λ₯Ό μ¬μ©νμ¬ <origin_url> <origin_branch> μ£Όμ κΈ°μ΅
# => μ£Όμλ₯Ό κΈ°μ΅ν μ΄ν, 'git push'λ§ μ¬μ©ν΄λ λμΌνκ² μλ
```

## $ git clone

μκ²© μ μ₯μ λ‘μ»¬λ‘ λ³΅μ 

```bash
# git clone <μ μ₯μ_μ£Όμ>
git clone https://github.com/<someone>/<some_repository_name>
```

## $ git pull

μκ²© λ³κ²½μ¬ν­μ λ‘μ»¬ μ μ₯μμ ν΅ν©

*μκ²©μ λ‘μ»¬ μμμ΄ μλ κ²½μ°, μ»€λ°μ pushνκΈ° μ μ μκ²© λ³κ²½ μ¬ν­μ λ‘μ»¬ μ μ₯μμ ν΅ν© λ¨Όμ  μ§ν*

```bash
git pull
# git pull = git fetch + git merge
```

- **git fetch**: μκ²© μ μ₯μμμ μ λ³κ²½μ¬ν­ κ°μ Έμ€κΈ°
- **git merge**: λ³κ²½μ¬ν­ λ³ν©
- λ§μ°¬κ°μ§λ‘ λ³ν© μ μΆ©λ λ°μ κ°λ₯

### pull request

pushν λΈλμΉκ° μκ²© μ μ₯μμ λ³ν©ν  μ μλλ‘ μμ²­

- μκ²© μ μ₯μμμ pull request μμ±: `https://github.com/<someone>/<some_repository_name>`
- μΆ©λ ν΄κ²°
- pull request λ³ν©

## branch push

```bash
# λ‘μ»¬ νκ²½μμ,
git branch <new_branch>
git switch <new_branch>
git add .
git commit -m "create new branch"

# μ λΈλμΉ push
git push origin <new_branch>
```

# 4. additional

## workflow

β GitFlow / Github Flow / Trunk-based / Gitlab Flow

### GitFlow

by Vincent Driessen

1. main
2. develop
3. feature
4. release
5. hotfix

- ci/cdμ μ ν©νμ§ μμ
- κ°λ° νκ²½ λ±μ λ§λλ‘ λ³κ²½νμ¬ μ¬μ©

<figure>
  <img src="./git-cheat-sheet-7.png" alt="develop, feature, release, hotfix λΈλμΉμ μ­ν μ λ°λΌ μ¬μ©. develop λΈλμΉλ₯Ό μ£Όλ‘ κ°λ°μ μ§ννλ©° κ°λ°νλ κΈ°λ₯λ³ feature λΈλμΉλ₯Ό μΆκ°, λ³ν©μ λ°λ³΅νκ³  release λΈλμΉλ₯Ό μμ±νμ¬ λ°°ν¬. κΈ΄κΈν μ€λ₯ μμ  μ hotfix λΈλμΉλ₯Ό μμ±νμ¬ mainκ³Ό develop λΈλμΉμ λ³ν©" />
  <figcaption>develop, feature, release, hotfix λΈλμΉμ μ­ν μ λ°λΌ μ¬μ©. develop λΈλμΉλ₯Ό μ£Όλ‘ κ°λ°μ μ§ννλ©° κ°λ°νλ κΈ°λ₯λ³ feature λΈλμΉλ₯Ό μΆκ°, λ³ν©μ λ°λ³΅νκ³  release λΈλμΉλ₯Ό μμ±νμ¬ λ°°ν¬. κΈ΄κΈν μ€λ₯ μμ  μ hotfix λΈλμΉλ₯Ό μμ±νμ¬ mainκ³Ό develop λΈλμΉμ λ³ν©</figcaption>
</figure>

### Trunk-based

main λΈλμΉλ§μ μ¬μ© `β Github Flow`

- μ§μμ μ΄κ³  λ§μ νμ€νΈ νμ
- ci/cdμ μ ν©ν¨

<figure>
  <img src="./git-cheat-sheet-8.png" alt="main λΈλμΉλ₯Ό κΈ°μ€μΌλ‘ κ°λ°νλ κΈ°λ₯μ λ°λΌ λΈλμΉ μμ± ν main λΈλμΉμ λ³ν© λ°λ³΅" />
  <figcaption>main λΈλμΉλ₯Ό κΈ°μ€μΌλ‘ κ°λ°νλ κΈ°λ₯μ λ°λΌ λΈλμΉ μμ± ν main λΈλμΉμ λ³ν© λ°λ³΅</figcaption>
</figure>

## .gitignore

pushλμ§ μλ νμΌ νΉμ κ²½λ‘ μ μ νμΌ

- docs: [Git - gitignore Documentation](https://git-scm.com/docs/gitignore)

### how to write

`gitignore` νμΌμ κ° λΌμΈμΌλ‘ κ΅¬λΆνμ¬ νμΌ νΉμ κ²½λ‘ ν¨ν΄ μ μ

```
# this is a comment
\#dir_start_with_hash

!this_is_negative_pattern
\!file_start_with_exclamation_mark!.txt

/directory/separate

*.anything
without/?.something

**/match/all/dir
all/**
all/**/between
```

- νΉμ gitignore μμ±: [gitignore.io](https://www.toptal.com/developers/gitignore)

## another commands

- [20 Git Commands you (probably) didn't know about π§ββοΈ](https://dev.to/lissy93/20-git-commands-you-probably-didnt-know-about-4j4o), *[Alicia Sykes](https://dev.to/lissy93)* - blog post
- [Git - git Documentation](https://git-scm.com/docs/git#_git_commands)

# Documents

- [Reference](https://git-scm.com/docs/)
- [GitHub Training Kit](https://training.github.com/)

# Etc. Ref

- [https://youtu.be/XFm2qNs30BE](https://youtu.be/XFm2qNs30BE)
- [https://youtu.be/EV3FZ3cWBp8](https://youtu.be/EV3FZ3cWBp8)
