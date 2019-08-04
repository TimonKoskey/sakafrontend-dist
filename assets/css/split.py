def main():
	f=open('now-ui-dashboard.min.css','r')
	new=open('newmaterial-dashboard.css','w')
	for line in f:
		for c in line:
			print(c,file=new,end='')
			if c =='}':
				print('\n',file=new)

if __name__=="__main__":main()