import chess
import re
import sys
import json

def _parse_moves(token):
	#Parse a moves token and returns a list with movements
	moves = []
	while token:
		token = re.sub(r'^\s*(\d+\.+\s*)?', '', token)

		if token.startswith('{'):
			pos = token.find('}')+1
		else:
			pos1 = token.find(' ')
			pos2 = token.find('{')
			if pos1 <= 0:
				pos = pos2
			elif pos2 <= 0:
				pos = pos1
			else:
				pos = min([pos1, pos2])

		if pos > 0:
			moves.append(token[:pos])
			token = token[pos:]
		else:
			moves.append(token)
			token = ''
	
	return moves

def _pre_process_text(text):
	#Removes blank lines, additional spaces, commentaries etc.
	text = re.sub(r'\s*(\\r)?\\n\s*', '\n', text.strip())
	lines = []
	for line in text.split('\n'):
		line = re.sub(r'(\s*;.*|^\s*)', '', line)
		if line:
			lines.append(line)
	
	return lines

def _next_token(lines):
	#Gets the next token from lines
	#There are two kinds of tokens: Tags and Moves
	if not lines:
		return None

	token = lines.pop(0).strip() 
	if token.startswith('['):
		return token

	while lines and not lines[0].startswith('['):
		token += ' '+lines.pop(0).strip()
	
	return token.strip()

class WinRatio:

	def __init__(self):
		self.board = chess.Board()
	
	def start(self,chessGames):
		WhiteWins = 0
		BlackWins = 0
		Draws = 0
		for pgn_text in chessGames:
			lines = _pre_process_text(pgn_text)
			token = _next_token(lines)
			
			if token == '#######':
				break

			elif token == "1-0" or token == "0-1" or token == "1/2-1/2" or token == "*":
				if token == "1-0":
					WhiteWins += 1
				elif token=="0-1":
					BlackWins += 1
				elif token == "1/2-1/2":
					Draws += 1
				else:
					pass
			else:
				pass
		
		with open('output.txt', 'a') as file:
			file.write("White Wins: " + str(WhiteWins))
			file.write('\n\n')
			file.write("Black Wins: " + str(BlackWins))
			file.write('\n\n')
			file.write("Draws: " + str(Draws))
			file.write('\n\n')

class CapturedSquares(object):

	def __init__(self):
		self.board = chess.Board()

	def simulateGame(self,moves):
		for move in moves:
			self.board.captured_squares_frequency(move)

	def start(self,chessGames):

		for pgn_text in chessGames:
			lines = _pre_process_text(pgn_text)
			token = _next_token(lines)
			
			if token == '#######':
				break

			if not token:
				pass

			elif token.startswith("1. "):
				self.board.reset()
				moves = _parse_moves(token)
				self.simulateGame(moves)

			else:
				pass

		with open('output.txt', 'a') as file:
		 file.write(json.dumps(self.board.capturedSquares))
		 file.write('\n\n')
		 file.write(json.dumps(self.board.totalCaptured))

class FirstMoveDistribution(object):

	def __init__(self):
		self.board = chess.Board()

	def simulateGame(self,moves):
		counter = 1;
		for move in moves:
			counter += 1
			moveNumber = counter/2
			self.board.first_move_distribution(move, moveNumber)

	def start(self,chessGames):

		for pgn_text in chessGames:
			lines = _pre_process_text(pgn_text)
			token = _next_token(lines)
			
			if token == '#######':
				break

			if not token:
				pass

			elif token.startswith("1. "):
				self.board.reset()
				moves = _parse_moves(token)
				self.simulateGame(moves)

			else:
				pass

		with open('output.txt', 'a') as file:
		 file.write(json.dumps(self.board.moveDistribution))

class PathTrajectory:

	def __init__(self):
		self.board = chess.Board()

	def simulateGame(self,moves):
		for move in moves:
			self.board.path_trajectory(move)

	def start(self,chessGames):
		# count = 1
		for pgn_text in chessGames:
			# print count
			# count += 1
			lines = _pre_process_text(pgn_text)
			token = _next_token(lines)
			
			if token == '#######':
				break

			if not token:
				pass

			elif token.startswith("1. "):
				self.board.reset()
				moves = _parse_moves(token)
				self.simulateGame(moves)

			else:
				pass

		with open('output.txt', 'a') as file:
		 file.write(json.dumps(self.board.piecePath))
