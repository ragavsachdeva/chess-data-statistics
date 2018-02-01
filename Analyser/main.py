import analyse

file = open("test_input.pgn", "r+")
games = file.readlines()
file.close()


# Compute the frequency of captured squares

# analyser = analyse.CapturedSquares()
# analyser.start(games)

# Compute the frequency of capturing squares

# analyser = analyse.CapturingSquares()
# analyser.start(games)

#Opening Moves

# analyser = analyse.ComputeOpenings()
# analyser.start(games)

#Compute the frequency of square utilisation

# analyser = analyse.SquareUtilisation()
# analyser.start(games)


# Compute the first move distribution

# analyser = analyse.FirstMoveDistribution()
# analyser.start(games)


# Compute the path trajectory

# analyser = analyse.PathTrajectory()
# analyser.start(games)


# Compute number of White wins, Black wins and Draws

# analyser = analyse.WinRatio()
# analyser.start(games)
