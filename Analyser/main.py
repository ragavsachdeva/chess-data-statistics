import analyse

file = open("test_input.pgn", "rw+")
games = file.readlines()
file.close()


# Compute the frequency of captured squares

# analyser = analyse.CapturedSquares()
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
