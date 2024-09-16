---
title: Monster Hunter's Monsters Are Set Up For Success
date: 2023-07-21
---

A strange property of Monster Hunter, especially old Monster Hunter, is that much of the enjoyment of a fight seemingly does not come from explicit design on the part of the developers. In fact, in some cases (Uragaan comes to mind) I would go further and say that the "designed" elements can be quite poor, yet the fight is still somewhat enjoyable. Why is this?

My theory is that the mechanics and "design patterns" set the developers up for success, so to speak. This isn't necessarily something unique to Monster Hunter, but it does manifest in a unique way. Let's take a look!

### Commitment

Many notable action games such as DMC, etc. use player movement and attacks that are much faster than enemies. This isn't categorically bad or anything, but it's also not the only way to do things! [As this article explains,](https://critpoints.net/2020/09/12/how-dark-souls-changed-combat/) when you have attacks on a similar timescale to enemies, moves can be differentiated more based on timing, and more emphasis is put onto whiff punishing and attacking from blind spots. One could make a similar argument with respect to movement: having movement options that are comparable to your enemies's emphasizes efficient use of said options and allows for deeper tradeoffs.

Additionally, Monster Hunter is much more limited in canceling out of moves than many other action games. You are able to cancel out of a lot of moves' endlag with a roll, and continuing a string avoids the endlag of the previous move, but beyond that, you are locked in once you start an action. One could imagine a system that has more cancels and still works well (perhaps using some sort of meter), but this one avoids subverting the tradeoffs mentioned above while still allowing a surprising amount of player flexibility. 

### The Magic Number 6

The standard evasive roll has 6 iframes at 30 fps, or 0.2 seconds. This value has been kept constant from MH1 all the way until 5th gen, and for good reason! An obvious comparison point is Dark Souls. [(Source)](https://www.reddit.com/r/opensouls3/comments/68khsv/wip_a_comparison_of_roll_frame_data_from_the_3/)

![Dark Souls roll frame data](https://i.redd.it/5ka4b6b04uuy.png)

I don't have hard data for the endlag on MH rolls, but I would guess it's at least 10 frames. Just based on the numbers, clearly iframing attacks is significantly harder in MH than Souls.

But wait, there's more! Attacks in Monster Hunter are slower than Souls, in the specific sense of the *velocity and duration of the hitboxes*. Monsters will frequently attack with hitboxes that last more than half a second and move much slower than a sword swing; the few attacks that don't do this (e.g. Nargacuga sideways tail whip) are notable precisely because they are exceptions.

In practice, 6 iframes strikes a balance such that using iframes to avoid many attacks is still completely possible, but the standard technique you use in Souls of rolling opposite the velocity vector of the hitbox is less universally applicable. Instead, you will have to dynamically adjust your roll angle and timing to escape the hitbox, based on your positioning, the positioning of the monster, the particular monster attack, and your possible roll options (which is tied to your initial attack angle if you are in attack endlag). Often, simply rolling out of range of the hitbox is the smarter decision!

This means that the effect of even minor differences in hitboxes is viscerally felt, even for ostensibly simple moves like tailspins which are shared by almost all monsters. 

### Hitzones

Hitzones are simply the values that determine how much damage a monster takes when hitting a specific location. Other games occasionally use this, such as in Dark Souls 3 how the head of Darkeater Midir takes much more damage than the rest of its body. In Monster Hunter, this is a universal mechanic; essentially every monster has 5 or more areas with their own hitzone values.

Positioning then takes on an additional offensive dimension, where being able to stay near the weakest areas is rewarded. In addition to adding to the web of tradeoffs in your actions, this also contextualizes arbitrary movements of the monster as challenges and opportunities for your aim.

Luckily, the monster design template established in MH1 works well with this system. The head is frequently the most vulnerable part of the monster, but standing in front tends to leave you in danger of fast and damaging attacks such as charges and bites. We can see how important this is by comparing to Freedom Unite's Chameleos, whose weakest hitzone (the back legs) is also one of the safest places to stand, resulting in a disappointingly boring fight for weapons with the mobility to consistently stay there.

Additionally, Monster Hunter has mostly been very restrained with moves tracking towards their target. This means that positioning decisions can stay relevant even before a monster begins an attack, and can even expand into a complex decision tree based on what the monster does after its immediate attack.

### Putting It All Together

To summarize, MH devs are set up for success when designing monsters for two broad reasons. First, the player toolkit is **built around tradeoffs in positioning, damage, and timing** that is **highly contextualized by the specific attack the monster is performing.** Second, the series's general monster design template supports this by **incentivizing offensive positioning with increased damage,** using attacks that **challenge players standing near the most lucrative hitzones**, **use limited tracking that respects player positioning**, and **create dynamic defensive play with attack timings that match up well to player framedata**.

There are many more aspects relevant to this discussion that I haven't touched on, such as the critical importance of monster AI, but perhaps I will some other time. Hopefully you found this interesting and informative!

![Yian Garuga: Black Wolf Bird](https://64.media.tumblr.com/55d68106280aa3c9bf42301f89cd8efb/aa9de4139e3d60a8-70/s540x810/d0b4655651c67d3e223bba3d7d6145b05cec4bd8.jpg)

[*Yian Garuga, Black Wolf Bird* by adamworks](https://www.tumblr.com/adamworks/710529135850749952/hi-there-yian-garuga-black-wolf-bird)