# knaackbuilt.dev
This is my personal website.

If you don't like utility-based css, sorry. I don't love it, but it's easier and faster to iterate and test with. I also hate bem and naming conventions in general. Name it what it is, or leave it as css utilities. No one understands inner-outer__temporary-second___inner-wrapper_button-inner. I've never seen two developers use bem the same way and at least utilities say what they are. Then again 453 classes on a single element is garbage too. It's all terrible lets just forget the whole internet.

Thanks for coming to my ted talk.

## Using this repo on ubuntu linuxbook
- nvm ls
- nvm use 12.22.12
- this install can use npm 8 and node 12 totally fine.

## Alpinejs explanations
This is for me, but maybe also for you. All documentation examples are like: "ok so just invoke the secondary arrow directive object into the first tertiary  prop for importing and then when you declare scrogz you'll be all set to foo-bar the normal way as strong typing." No, I don't understand it. Yes I do understand programming.

### setting x-bind html attributes
:{thing that is set as an html attribute}="value that triggers it when set"
:{something} is alpine shorthand for x-bind:{something}

#### examples
x-data value --> clicked = false
<details :open="!clicked">

This results in a details element that gets the html attribute `open` when the x-data value of clicked is not-true, as in the false turns to true because the input checkbox that is attached to now is activated.

I assume to every other dev this is a "foo" "bar" situation but to be really clear I've literally never understood a single example of foo-bar syntax in example docs. Just explain the friggen concept with real words that indicate the thing that will happen.

This is also very useful for setting other binary html attributes such as `hidden`, `aria-expanded`, and `disabled` among others.

### setting html classes with x-bind
Alpine preserves the classes already declared programmatically elsewhere. It's additive or subtractive based on behavior. 
