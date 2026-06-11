# How many times can you hit a MacBook M1 Air with a hammer?

> ...And reasonably expect it to function. What parts does it **really** need?

This seems straightforward. Obviously the MBA M1 needs all the things that any laptop actually needs to function. 

> You silly bastard. This laptop needs exactly **fuck-all** to function.

Now functioning is a slippery slope. Do we mean function at all, even if we can't tell? or function like "a person can actually use this" - function. 

Well in either case I think you could consider that this thing really needs basically nothing to work fine.

Is this a revelation to most people? Maybe not. I think your average user would say that a laptop needs, say, a **keyboard and a screen** to function. Nope! Not this fucking laptop. 

At this point you might be able to drop this thing out of a vehicle at highway speed and still have a totally awesome functioning computer. Citation needed, make sure it was fucked up before you do that and the case is closed.

---

I think apple has made some of the most enjoyable and useful computers ever. Then they started making them with intel integrated chipsets and proceeded to make some of the shittest computers a lot of money could buy. I'd say from late 2009 until late 2020 they made exactly zero good computers. Dark times in apple land. When they introduced the M1 silicon, they basically could have stopped making computers. It's perfect. 

From my extensive experience rebuilding and tinkering with the PowerPC era of laptops (G3's and G4's in iBooks and PowerBooks) I can say that while these machines were often difficult to repair and replace parts on, they weren't impossible. There weren't too many single-use features of the inner case design, cabling, or critical parts except the usual useless padding and other covers and such. And half the screws - you don't need all those.

Modern laptops are scary. They have nothing to fix or replace. If it's broken, it's fucked. Doesn't matter what torx screwdrivers you have and time to spare. 

> Not to fret! The MacBook M1 Air doesn't fucking need any of it's goddamn parts anyways. 

Did you fuck up your screen by dropping it? Who cares! Your machine is actually faster now that it doesn't need that shit attached. Of no concern to the MBA M1 is the trivial nature of whether or not the laptop screen is connected. It doesn't give a shit. There are zero hardware level checks to see if the screen cable is connected. If you unplug that cable it says fuck you I believe it's still here. A phantom limb screen. 

In the past you'd be able to replace or upgrade a harddrive, ram, expansion slots and add-ons, heat sinks and fans, sometimes things that break like dc-in boards if you were insane (citation for replacing a graphics card on a powerbook - crying emoji I have to do this on my powerbook g4 17). Some of these parts were even considered user serviceable. The ram was right there under the keyboard. Or the airport card was plug and play. Not anymore. All that shit is printed into a graham cracker and stapled to the case. There are no parts.

This is an interestings predicament. If the mac has practically no parts, then there's not really anything it needs beyond the core single component to work. 

INsert diagram here: this image shows the locations of a MBA M1 air that you could reasonably hit with a small sledge hammer (less than 5lbs) or a ball peen hammer, whatever you had available. The computer would be fine. 

All kidding aside, this machine needs three things to work: logic board (duh), touch ID button (debated), and a power source (irrelevant which). 

What I found it does not need: internal keyboard or mouse, battery, wifi/bluetooth antenna, screen. 

The touch ID button is needed to start the machine, but you could unplug that after it's on. 

Since the internal keyboard is broken due to water damage on this MBA M1, it made logging in the first time pretty difficult considering the setting for "alwasy ask" was checked for USB accessories. An interpid internet suggestion said to boot into recovery mode and change the harddrive security settings to least secure to allow the usb accessory to connect. Fun fact: that's hard when the screen doesn't exist. Luckily they engineered everything you need to force this machine into submission from just the touchID button. Hold it for fucking forever when starting up and eventually it will give you startup options. Apple finally decided to align real-world-user-behavior with the machines logic. Hold that power button harder and it works this goddamn time. Oh it did!

Also booting to recovery mode allows the USB device to connect, which is interesting. Changing those security settings did fuck all though. No luck. 

Fun additional fact: you can remove the bottom case of this machine, haphazardly plug in a broken-ish M1 display screen, hold the connector in place with your hand and press in a key part of the broken screen to make the screen visible enough to use, all while the machine is starting up in recovery mode. You can even hot swap another broken M1 screen to see if that works better. The tiny display connector doesn't give a shit, the machine doesn't give a shit. Plug it in, unplug it, fuck off. 

I am an accessibility engineer by day and I had the epiphany that I could activate the screen reader and the virtual on screen keyboard and use the still somewhat functional track pad to type the password in. Then maybe I could force the machine to use an external monitor (Which the usb always ask setting doesn't care about, go figure) and maybe disable that setting and force the display to the external. 

The touchID button to the rescue. Pressing three times rapidly activated VoiceOver and auto reading options and allowed me to select the virtual keyboard, type by clicking the password, and get logged in. After a lot of faffing around I managed to get the setting unchecked and the display forced to the external monitor. The MBA was now in "headless" mode considering it had no screen connected. This actually proved really problematic considering that when the machine went to sleep, started up, or needed to start in recovery mode it wouldn't recognize the external monitor as the primary display. Time to Panic!

Another intrepid internet suggestion said that while the display did not need to be connected or functional, you did need the magnetic sensor to activate to fool the machine into thinking the display was closed. This does not require that the display be connected. Or even that it exist in a not frankenstein way. I just fucking laid the broken display down over the keyboard and lined up the front and poof, external display is now the only active display.

I then proceeded to fuck this machine up by upgrading to the latest security release of Tahoe, which I thought was fine since I've never really had a problem with software not functioning after a minor update. Oh shit, that was so wrong. Never update your machines. At this point I thought that the software update had broken some key software that I was using this machine for and that by doing a full firmware/DFU reset and reflash I could revert my mistake and go happily on my way. 

How do you boot into DFU mode with no functional keyboard? Oh shit it's like a tweleve key combination with playing the flute and doing your taxes to get the target machine to boot into DFU mode. 

Internet slueths to the rescue again. You can apparently trick the machine into DFU mode by causing a kernel panic. Unplug the battery (Already done this machine doesn't fucking have one), unplug the power, then connect the source mac and the target mac with a usb-c cable and try to start the target mac. This will give enough trickle power to attempt a start, then panic into DFU mode. Get the right cable though: everyone on the internet says the usb-c cable that comes with the machine to charge does or doesn't work, don't use a thunderbolt 3 cable apparently, don't use a 3.1 revision usb-c cable, get a usb-c cable that you find in a box of cables, I have no idea and neither does the internet. Just try all the fucking usb-c cables you have until one lets Apple Configurator see the target machine. 

Then try the insane sequence above and see if you get to DFU mode. I tried so many variants and cables that I nearly broke the rest of the target computer. None of it worked. Surely there is another way, right? Hell yeah there is. Some dude wrote a cli method to force a target mac that is connected to the source mac into DFU mode via terminal. It just straight up worked. Instant DFU mode on the target machine. 

Use Apple Configurator to reformat the target mac to Seqiouia using an apple signed ipsw and away we go. During the reflash of the firmware the machine needs to reboot and re-enter DFU mode. Since I hacked my way in, it couldn't do that an failed before the OS was installed. Shit. Of no concern to the MBA M1 is the firmware or software mismatch or like random critical failures during sensitive procedures like firmware reflash either! This machine doesn't give any fucks. This kind of problem would have fucking bricked any other computer I've ever worked on. Just run that terminal command again and force the target mac back to DFU and start configurator over again. It fucking just picks up flawlessly where it left off. 

The status bar was also broken due to the hacked DFU method, there's no terminal/log streaming during this operation, so I had no idea if the thing hung or was moving along ok. You can totally check to see if it's copying over the OS files via Activity Monitor and the network tab. Since the usb-c connection now counts as a network data connection you can see if packets are merrily streaming their way out of the source mac. Sure enough, yes!

Successful reflash and factory reset. Started up, forced the screen settings, set up a new account. Installed programs. Same. Borken. Software.

What the actual fuck? Some dark recesses of the internet suggested that apple metal drivers or gpu firmware were forever changed or somehow stuck on the Tahoe revision. But apple's official docs were insistent that a DFU reformat with no time machine backup or restore is a total and complete wipe of goddamn everything. 

Then some other key person out there with too much time determined that there was another issue with the MBA M1: power starving. I'm an idiot. This machine has no battery connected because it has a hardware fault and is totally broken. The only power source is the 65W usb-c charger. While the machine worked totally fine with nearly all regular software, enter anything that seriously taxes the GPU or CPU cores and suddenly the machine shits itself. It throttles everything because the usb-c's tiny connectors and hardware limitations literally cannot provide enough power to deal with spikes. This machine uses the battery to handle surge and intensive task-processing alongside the usb-c power source. That is kinda wild. Every other laptop I've worked with could be set into high-performance mode just from the power adapter without a battery installed at all. 

So I learned a lot. Now you can learn too. New used battery and everything is fine. So the machine will "work" without a battery, but it won't perform. I still maintain that this laptop I could hit with a hammer significantly more times than other laptops and still salvage a working machine in some fashion. If you spill water on it though, fuck off. It's dead. 

Oh and I didn't address the missing wifi/bluetooth antenna. I was surprised when the machine was delivered and this was missing, but you do have to remove it to remove the screen so maybe it was forgotten or sold as parts. I thought that missing this antenna would mean that wifi would not work. Again, this macbook air doesn't fucking care if it has the required parts or not. The antenna is just that: an antenna. The core functionality of the wifi reciever is part of the logic board. We don't need a goddamn antenna if the laptop is literally sitting on top of the fucking router. Flawless. Move the router more than, say 3 millimeters away from the back of the case at exactly the right spot and you'll get a dropped packets and a shit connection, but as long as you keep that baby practically taped to the bottom of the macbook air you'll get exactly the same download speeds as with a damn antenna. Bluetooth seems to be the same although AirDrop didn't seem to work even when a similar "smash these devices together" strategy was employed. 

If anyone is asking, no this process won't bypass activation lock or a managed profile lock on a machine you "found" in the dumpster. Those are both handled at the activation layer which requires an internet connection and is Apple managed. You can re-flash everything to oblivion and still be unable to activate the machine. 

I now have a perfectly functional M1 that can run a top-tier OS smoothly.

P.S. - Apple also fucked up on the intial roll out of the m1 series. This machine is so good they panic'd and made a bad profit/product call. There is zero difference between the air and the pro with the same configuration. No more cores, no fun extras. Just worse battery life and a bulkier case. The macbook pro m1 has a bigger battery but somehow gets worse life (anectodotally). I bet you could hit the Pro with a hammer a few more times though.



