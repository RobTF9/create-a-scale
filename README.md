# create-a-scale

A simple CLI to generate a typography and spacing css file to keep your design consitent.
<br><br>

### How it works

---

First off, you'll need node and npm installed, the simplest way to do that is to use [Volta](https://volta.sh/).

To install the tool globally run this command:

```
npm i -g create-a-scale
```

Once it's installed all you have to do is run:

```
create-a-scale
```

You'll be prompted for the required information.

![](/demo/base-command.png)

The output of this command would be:

```css
:root {
  --b: 16px;
  --xs: 21.328px;
  --s: 28.430224px;
  --m: 37.897488591999995px;
  --l: 50.51735229313599px;
  --xl: 67.33963060675028px;
}

.b {
  font-size: var(--b);
  margin-bottom: var(--b);
  line-height: calc(var(--b) * 1.333);
}

.xs {
  font-size: var(--xs);
  margin-bottom: var(--b);
  line-height: calc(var(--xs) * 1.333);
}

.s {
  font-size: var(--s);
  margin-bottom: var(--b);
  line-height: calc(var(--s) * 1.333);
}

.m {
  font-size: var(--m);
  margin-bottom: var(--b);
  line-height: calc(var(--m) * 1.333);
}

.l {
  font-size: var(--l);
  margin-bottom: var(--b);
  line-height: calc(var(--l) * 1.333);
}

.xl {
  font-size: var(--xl);
  margin-bottom: var(--b);
  line-height: calc(var(--xl) * 1.333);
}
```

The output provides you with css variables and some utility classes for font sizes to use however you like. All built around the two values you initially provided.

<br><br>

### Config options

---

If you want to skip the prompts you can run the command by passing in some arguments they are:

1. `--out`: The name you want to give you file (defaults to scale.css)
2. `--size`: The base size you want to start with (you'll be prompted for this if you don't provide a value).
3. `--scale`: The scale to apply to the base size (you'll be prompted for this if you don't provide a value).
4. `--break`: Breakpoints to scale up for. Under the hood this will use media queries with a `min-width` of the value you provide, can add as many as you want.

An example with all of these options:

```
  create-a-scale --out type-scale.css --size 16 --scale 1.2 --break 960 --break 1200
```

This would output a file called `type-scale.css` in your current directory that looked like this:

```css
:root {
  --b: 16px;
  --xs: 19.2px;
  --s: 23.04px;
  --m: 27.648px;
  --l: 33.1776px;
  --xl: 39.81312px;
}

@media (min-width: 960px) {
  :root {
    --b: 19.2px;
    --xs: 23.04px;
    --s: 27.648px;
    --m: 33.1776px;
    --l: 39.81312px;
    --xl: 47.775743999999996px;
  }
}

@media (min-width: 1200px) {
  :root {
    --b: 23.04px;
    --xs: 27.648px;
    --s: 33.1776px;
    --m: 39.81312px;
    --l: 47.775743999999996px;
    --xl: 57.330892799999994px;
  }
}

.b {
  font-size: var(--b);
  margin-bottom: var(--b);
  line-height: calc(var(--b) * 1.2);
}

.xs {
  font-size: var(--xs);
  margin-bottom: var(--b);
  line-height: calc(var(--xs) * 1.2);
}

.s {
  font-size: var(--s);
  margin-bottom: var(--b);
  line-height: calc(var(--s) * 1.2);
}

.m {
  font-size: var(--m);
  margin-bottom: var(--b);
  line-height: calc(var(--m) * 1.2);
}

.l {
  font-size: var(--l);
  margin-bottom: var(--b);
  line-height: calc(var(--l) * 1.2);
}

.xl {
  font-size: var(--xl);
  margin-bottom: var(--b);
  line-height: calc(var(--xl) * 1.2);
}
```
