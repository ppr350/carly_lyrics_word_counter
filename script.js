const getRunAwayWithMe = `You're stuck in my head, stuck on my heart, stuck on my body, body
I wanna go, get out of here, I'm sick of the party, party
I'd run away
I'd run away with you
Ooh
This is the part, you've got to say all that you're feeling, feeling
Packing a bag, we're leaving tonight when everyone's sleeping, sleeping
Let's run away
I'll run away with you
Ooh
'Cause you make me feel like
I could be driving you all night
And I'll find your lips in the street lights
I wanna be there with you
Ooh
Baby, take me to the feeling
I'll be your sinner, in secret
When the lights go out
Run away with me
Run away with me
Baby, every single minute
I'll be your hero and win it
When the lights go out
Run away with me
Run away with me
Up in the clouds, high as a kite, over the city, city
We never sleep, we never try, when you are with me, with me
I wanna stay
I wanna stay here with you
Ooh
'Cause you make me feel like
I could be driving you all night
And I'll find your lips in the street lights
I wanna be there with you
Ooh
Oh baby, take me to the feeling
I'll be your sinner, in secret
When the lights go out
Run away with me
Run away with me
Oh baby, every single minute
I'll be your hero and win it
When the lights go out
Run away with me
Run away with me
Hold on to me
I never want to let you go
(Run away with me, run away with me)
Over the weekend
We could turn the world to gold, oh oh
(Run away with me, run away with me)
Over the weekend we could turn the world to gold
Oh oh, oh oh
Oh my baby, take me to the feeling
(Take me to, take me to it)
I'll be your sinner, in secret
When the lights go out
Run away with me (just run away with me)
Run away with me (away with me, yeah, yeah)
Every single minute
I'll be your hero and win it
When the lights go out
Run away with me
Run away with me
Run away with me
Run away with me
Run away with me
Run away with me`;
const setRunAwayWithMe = getRunAwayWithMe.replace(/(\r\n|\n|\r)/gm, " ").replaceAll(',', '').replaceAll('(', '').replaceAll(')', '').toLowerCase().split(" ");
console.log(setRunAwayWithMe);
const countRunAwayWithMe = setRunAwayWithMe.reduce( (lyricsBasket, word) => {
    lyricsBasket[word] = (lyricsBasket[word] || 0) + 1;
    return lyricsBasket;
} , {})
console.table(countRunAwayWithMe);
console.log(countRunAwayWithMe);
console.log(Array.isArray(countRunAwayWithMe));

let sortable = [];
for (var word in countRunAwayWithMe) {
    sortable.push([word, countRunAwayWithMe[word]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});
console.log(sortable);