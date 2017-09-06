# Chess Data Visualisation

A package that analyses chess games (in PGN format) using python modules along with a visualisation template using HTML, JS and CSS

### Functionality

* A PGN parser
* A game "simulator" - move generation and validation
* A game analyser - Capture Squares Frequency, First Move Distibution, Piece Trajectory and Win Ratio - [more info](/Analyser/README.md)
* Data visualisation

## Getting Started

Assuming that you have a PGN file with some chess games, you can use: <br />
[Analyser](/Analyser) - to extract meaningful data from the PGN file
[Visualisations](/Visualisations) - to visualise the extracted data

### Prerequisites

You need to have python installed on your computer in order to use analysis modules

## Author

* **Ragav Sachdeva**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

Thanks to Niklas Fiekas for publishing his [python-chess](https://github.com/niklasf/python-chess) library. The game simulator functionality is ported directly from his work.

Thanks to Renato de Pontes Pereira for his publishing his approach to [parsing a PGN file](https://github.com/renatopp/pgnparser). The parsing algorithms are based off of his work.

Thanks to ebemunk for publishing his [chess-dataviz](https://github.com/ebemunk/chess-dataviz) library. The 'journey of a piece' visualisation directly utilizes his work and 'captured squares' heat map was influenced by his version.
