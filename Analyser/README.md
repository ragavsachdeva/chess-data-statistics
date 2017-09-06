# Game Analyser

Python modules that analyses chess game(s) in PGN format

### Functionality

* Capture Squares Frequency - number of pieces that are captured on each square<br />
Output format: {"Square": number_of_captured_pieces, ...}
```
For e.g.

{"h8": 0, "f1": 6, "f2": 4, "f3": 14, "f4": 9, "f5": 5, "f6": 21, "f7": 8, "h2": 2, "h3": 2, "h1": 2, "h6": 3, "h7": 1, "h4": 4, "h5": 7, "b4": 4, "b5": 16, "b6": 3, "b7": 3, "b1": 1, "b2": 7, "b3": 1, "d6": 9, "d7": 4, "d4": 38, "d5": 44, "d2": 6, "d3": 0, "d1": 6, "c7": 0, "e5": 31, "b8": 0, "f8": 5, "c5": 12, "d8": 2, "c4": 22, "g7": 3, "g6": 8, "g5": 6, "g4": 9, "g3": 3, "g2": 6, "g1": 0, "e4": 21, "g8": 0, "a1": 2, "a3": 3, "a2": 1, "a5": 2, "a4": 4, "a7": 1, "a6": 4, "c3": 18, "c2": 2, "c1": 2, "e6": 1, "e1": 4, "c6": 4, "e3": 5, "e2": 0, "e7": 7, "a8": 0, "c8": 3, "e8": 2}
```

* First Move Distribution - frequency of the point at which a piece is first moved in a game<br />
Output format: {"Square": {"move_number": frequency}, ...}
```
For e.g.

{"g7": {"2": 1, "37": 1, "14": 1}, "f1": {"9": 3}, "f2": {"19": 1, "25": 1, "56": 1}, "g2": {"33": 1, "59": 1, "21": 1}, "g1": {"3": 1, "7": 1, "6": 1}, "f7": {"33": 1, "46": 1, "17": 1}, "h2": {"57": 1, "17": 1}, "h1": {"10": 1, "13": 1, "23": 1}, "h7": {"31": 1, "5": 1, "6": 1}, "g8": {"1": 1, "3": 2}, "a1": {"8": 1, "13": 1, "20": 1}, "h8": {"15": 1, "7": 2}, "a2": {"35": 1, "14": 1, "48": 1}, "b1": {"3": 2, "4": 1}, "b2": {"31": 1, "20": 1, "17": 1}, "d7": {"3": 1, "2": 2}, "a7": {"30": 1, "17": 1}, "c2": {"2": 2, "14": 1}, "c1": {"19": 1, "5": 1, "4": 1}, "e1": {"10": 1, "13": 1, "16": 1}, "e7": {"1": 2, "10": 1}, "d1": {"13": 1, "12": 1, "15": 1}, "d2": {"1": 2, "2": 1}, "c8": {"9": 1, "13": 2}, "b8": {"5": 1, "12": 1, "15": 1}, "f8": {"11": 1, "5": 1, "4": 1}, "a8": {"37": 1, "15": 1, "29": 1}, "b7": {"31": 1, "22": 1, "48": 1}, "c7": {"9": 2, "8": 1}, "d8": {"10": 1, "6": 2}, "e2": {"1": 1, "5": 1, "7": 1}, "e8": {"12": 1, "7": 2}}
```

* Path trajectory - path taken by a piece throughout his life<br />
Output format: {"Piece": {"from-to": frequency, ...}, ...}
```
For e.g.

{"g7": {"g7-g6": 1, "g6-h5": 1}, "Qd8": {"f6-e7": 1, "a7-a2": 1, "a2-a7": 1, "b7-f7": 1, "c7-b6": 1, "c7-b7": 1, "a2-d5": 1, "c6-c7": 1, "d8-f6": 1, "d5-b5": 1, "f7-f8": 1, "b6-a5": 1, "a5-a2": 1, "b5-c6": 1, "e7-c7": 1, "c7-f7": 1, "f7-c7": 1}, "f2": {"f4-f5": 1, "f2-f4": 1}, "g2": {"g5-g6": 1, "g6-g7": 1, "g2-g3": 1, "g4-g5": 1, "g3-g4": 1}, "f7": {"f7-f6": 1}, "h2": {"h2-h4": 1}, "Qd1": {"f6-e7": 1, "d2-b2": 1, "h6-e6": 2, "e7-b4": 1, "b2-c3": 1, "e8-g6": 1, "b3-e6": 1, "e6-e7": 1, "e6-g6": 1, "e7-e6": 1, "c3-c5": 1, "b4-b3": 1, "c5-c3": 1, "d1-e2": 1, "e2-e3": 1, "e6-e8": 1, "e3-d2": 1, "c3-f6": 1, "g6-h6": 2}, "h7": {"h7-h6": 1}, "Ke8": {"e8-g8": 1, "h7-h8": 1, "g7-g8": 1, "g8-g7": 1, "g8-h8": 3, "h8-g8": 2, "h8-h7": 1}, "Bf1": {"e2-h5": 1, "f1-c4": 1, "c4-e2": 1}, "a2": {"a3-a4": 1, "a4-b5": 1, "a2-a3": 1}, "Bc8": {"a4-c6": 1, "c8-d7": 1, "c6-d5": 1, "d5-c4": 1, "c4-d5": 1, "d7-a4": 1}, "Ng1": {"g1-f3": 1, "f3-e5": 1}, "b2": {"b4-b5": 1, "b2-b4": 1}, "d7": {"d7-d5": 1, "d5-c4": 1}, "a7": {"a6-b5": 1, "a7-a6": 1}, "c2": {"c2-c4": 1}, "e7": {"e7-e6": 1}, "Bf8": {"f8-b4": 1, "d6-e5": 1, "b4-d6": 1}, "d2": {"d2-d4": 1}, "Bc1": {"c1-g5": 1, "g5-f6": 1}, "e2": {"e3-d4": 1, "e5-f6": 1, "d4-e5": 1, "e2-e3": 1}, "Ng8": {"g8-f6": 1}, "Rh8": {"d8-f8": 1, "f8-e8": 1, "f8-f6": 1, "f7-f6": 1, "e8-d8": 1, "f6-f7": 1, "h8-f8": 1}, "Nb8": {"b8-c6": 2, "c6-b8": 1, "c6-e7": 1}, "Rh1": {"h1-f1": 1, "d1-d2": 1, "f1-d1": 1}, "c7": {"c7-c5": 1, "c5-d4": 1}, "Nb1": {"d6-e8": 1, "e4-d6": 1, "e8-f6": 1, "c3-e4": 1, "b1-c3": 1}, "b7": {"b7-b5": 1, "b5-b4": 1}, "Ra8": {"d8-d2": 1, "a8-d8": 1}, "Ra1": {"a1-c1": 1, "c1-d1": 1, "d1-d5": 1}, "Ke1": {"f1-g2": 1, "h4-h5": 1, "e1-g1": 1, "h3-h4": 1, "g2-h3": 1, "g1-f1": 1}}
```
* Win Ratio - number of White wins, Black wins and Draws<br />
Output format: White Wins: number, Black Wins: number, Draw: number
```
For e.g.

White Wins: 9

Black Wins: 4

Draws: 7
```



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
