# Game Analyser

Python modules that analyses chess game(s) in PGN format

### Functionality

* Captured Squares - the squares where a particular piece was captured.
<br />
	Output format: {"all": {"Square": frequency, ...}, "wall": {"Square": frequency, ...}, "ball", {"Square": frequency, ...}, "Ra1": {"Square": frequency, ...}, "Nb1":{"Square": frequency, ...}...}


* Capturing Squares - the squares where a particular piece attacks.<br />
	Output format: {"all": {"Square": frequency, ...}, "wall": {"Square": frequency, ...}, "ball", {"Square": frequency, ...}, "Ra1": {"Square": frequency, ...}, "Nb1":{"Square": frequency, ...}...}


* Opening Moves - variations of first 7 opening moves<br />
	Output format: openings = {"name": "ref", "children": [{"name":piece,"move":PGN,"children":[...]},{"name":piece,"move":PGN,"children":[...]}, ..]}

* Square Utilisation - frequency of a particular piece utilising each square<br />
	Output format: {piece: {square: counter, square: counter...}, piece: {square: counter, square: counter...} ... }


* First Move Distribution - frequency of the point at which a piece is first moved in a game<br />
	Output format: {"Square": {"move_number": frequency}, ...}


* Path trajectory - path taken by a piece throughout his life<br />
	Output format: {"Piece": {"from-to": frequency, ...}, ...}

* Win Ratio - number of White wins, Black wins and Draws<br />
	Output format: White Wins: frequency, Black Wins: frequency, Draws: frequency




## Getting Started

The basic usage:

```
import analyse

file = open("replaceThisWithYourFileName.pgn", "rw+")
games = file.readlines()
file.close()

analyser = analyse.ReplaceThisWithTheAnalysisYouWant()
analyser.start(games)

```
To get the Capture Squares Frequency:

```
analyser = analyse.CapturedSquares()
analyser.start(games)
```

To get the First Move Distribution:

```
analyser = analyse.FirstMoveDistribution()
analyser.start(games)
```

To get the Path Trajectory:

```
analyser = analyse.PathTrajectory()
analyser.start(games)
```

To get the Win Ratio:

```
analyser = analyse.WinRatio
analyser.start(games)
```

### Note
* Add ####### in your PGN file, where you want your program to terminate. If you want to analyse all of the file, add that at the end.
* All data will be appended to output.txt
* A sample main.py and test\_input.pgn is uploaded so you can start using the package as soon as you download it
* If you have a large data file, this may take a while. For me, analysing 250k+ games took around 30 minutes
* The extracted data is of the exact format that the visualisation script uses
* The program does not take into account [En Passant](https://en.wikipedia.org/wiki/En_passant) moves. So make sure you filter those games out. (I know it's a bit of a pain if the dataset is too large... apologies)

#### Notation
If you have absolutely no idea about standard chess notations, here is what a chess board looks like:

![Alt text](CB.png?raw=true)

And chess pieces [as on the above board] are represented by:
```
White King: Ke1
White Queen: Qd1
White Knights: Nb1, Ng1
White Bishops: Bc1, Bf1
White Rooks: Ra1, Rh1
White Pawns: Pa2, Pb2, Pc2, Pd2, Pe2, Pf2, Pg2, Ph2 or a2, b2, c2, d2, e2, f2, g2, h2

Black King: Ke8
Black Queen: Qd8
Black Knights: Nb8, Ng8
Black Bishops: Bc8, Bf8
Black Rooks: Ra8, Ra8
Black Pawns: Pa7, Pb7, Pc7, Pd7, Pe7, Pf7, Pg7, Ph7 or a7, b7, c7, d7, e7, f7, g7, h7
```


And a game of chess in PGN format looks like:

```
[Event "World Cup"]
[Site "?"]
[Date "2013.08.11"]
[Round "?"]
[White "So, Wesley"]
[Black "Ipatov, Alexander"]
[ECO "C42"]
[WhiteElo "2710"]
[BlackElo "2584"]
[Result "1-0"]

1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6 9. Nc3 Nxc3 10. bxc3 dxc4 11. Bxc4 Bg4 12. h3 Bh5 13. g4 Bg6 14. Ne5 Nd7 15. f4 b5 16. Nxg6 hxg6 17. Bb3 Nb6 18. Qf3 Qd7 19. f5 Nd5 20. fxg6 fxg6 21. Bxd5+ cxd5 22. Qxd5+ Kh7 23. Bf4 Rfd8 24. Bxd6 Qxd6 25. Qxd6 Rxd6 26. Rab1 a6 27. Rf3 Rc8 28. Kf2 Kh6 29. Ke2 Kg5 30. a4 Rb6 31. axb5 axb5 32. Kd3 Kh4 33. Rb4 g5 34. d5 Rf6 35. Rxf6 gxf6 36. d6 Kxh3 37. d7 Rd8 38. Rd4 f5 39. gxf5 g4 40. f6 g3 41. f7 g2 42. f8=Q Rxf8 43. d8=Q Rf3+ 44. Ke2 g1=Q 45. Qh4+ 

1-0
```
